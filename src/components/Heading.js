'use client';

export default function Heading({ 
  children, 
  as: Component = 'h1', 
  className = '',
  splitAt = null // Can be a number (index) or string (split after this word)
}) {
  // Convert children to string
  const getTextContent = (node) => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) {
      return node.map(getTextContent).join('');
    }
    if (node?.props?.children) {
      return getTextContent(node.props.children);
    }
    return '';
  };

  const fullText = getTextContent(children);
  
  let firstPart = '';
  let secondPart = '';
  
  if (splitAt !== null) {
    if (typeof splitAt === 'number') {
      // Split at index
      firstPart = fullText.substring(0, splitAt);
      secondPart = fullText.substring(splitAt);
    } else if (typeof splitAt === 'string') {
      // Split after this word
      const index = fullText.indexOf(splitAt);
      if (index !== -1) {
        firstPart = fullText.substring(0, index + splitAt.length);
        secondPart = fullText.substring(index + splitAt.length);
      } else {
        firstPart = fullText;
      }
    }
  } else {
    // Auto-detect: split at first space
    const words = fullText.split(' ');
    if (words.length > 1) {
      firstPart = words[0];
      secondPart = ' ' + words.slice(1).join(' ');
    } else {
      // Single word - try common patterns
      if (fullText.includes('Vynzo')) {
        const vynzoIndex = fullText.indexOf('Vynzo');
        firstPart = fullText.substring(0, vynzoIndex + 5); // "Vynzo"
        secondPart = fullText.substring(vynzoIndex + 5);
      } else {
        firstPart = fullText;
      }
    }
  }

  // If we have JSX children (like <br />), render differently
  if (typeof children !== 'string' && Array.isArray(children)) {
    const hasJSX = children.some(child => typeof child === 'object');
    if (hasJSX) {
      // For complex JSX, wrap in spans
      return (
        <Component className={className}>
          {children.map((child, index) => {
            if (typeof child === 'string') {
              const words = child.split(' ');
              if (words.length > 1) {
                return (
                  <span key={index}>
                    <span className="font-bold text-white">{words[0]}</span>
                    <span className="font-light text-gray-300"> {words.slice(1).join(' ')}</span>
                  </span>
                );
              }
              return <span key={index} className="font-bold text-white">{child}</span>;
            }
            return child;
          })}
        </Component>
      );
    }
  }

  return (
    <Component className={className}>
      <span className="font-bold text-white">{firstPart}</span>
      {secondPart && <span className="font-light text-gray-300">{secondPart}</span>}
    </Component>
  );
}
