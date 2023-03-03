export function createElement(type: string, props: any, ...children: any[]) {
  return `<${type} className="${props.className}">${children.join(
    ""
  )}</${type}>`;
}
