const elementFactory = function <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  props: { [prop: string]: unknown },
  ...children: (string | Node)[]
) {
  props = props || {};
  children = !children ? [] : Array.isArray(children) ? children : [children];
  //@ts-ignore
  const { attributes, ...rest } = props;

  const eventListeners: { type: string; listener: EventListener }[] = [];

  for (const key in rest) {
    if (key.startsWith("on:")) {
      eventListeners.push({
        type: key.replace("on:", ""),
        listener: rest[key] as EventListener,
      });

      delete rest[key];
    }
  }

  let element: HTMLElementTagNameMap[K] = document.createElement(tag);

  // @ts-ignore
  for (const attr in rest) element[attr] = rest[attr];

  for (const { type, listener } of eventListeners)
    element.addEventListener(type, listener);

  element.replaceChildren(...children);

  if (attributes)
    for (const [name, value] of Object.entries(attributes))
      element.setAttribute(name, value);

  return element;
};

declare var element: typeof elementFactory;
self.element = elementFactory;
