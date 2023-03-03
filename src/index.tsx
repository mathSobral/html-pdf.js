/** @jsx createElement */
export function createElement(type: string, props: any, ...children: any[]) {
  return `<${type} ${parsePropsToAttrs(props)}>${children.join("")}</${type}>`;
}

function parsePropsToAttrs(props: any) {
  if (!props) {
    return "";
  }
  const propsKeys = Object.keys(props);

  return propsKeys.map((prop) => `${dashed(prop)}="${props[prop]}"`).join(" ");
}

function dashed(camelCased: string) {
  return camelCased.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());
}

export function generatePdf(content: () => string) {
  return content;
}

export default { createElement, generatePdf };
