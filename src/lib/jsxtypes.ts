/// <reference lib="DOM" />

declare namespace JSX {
  // The return type of our JSX Factory: this could be anything
  type Element = HTMLElement;

  // IntrinsicElementMap grabs all the standard HTML tags in the TS DOM lib.
  interface IntrinsicElements extends IntrinsicElementMap {}

  // The following are custom types, not part of TS's known JSX namespace:
  type IntrinsicElementMap = {
    [K in keyof HTMLElementTagNameMap]: {
      accesskey?: string;
      autocapitalize?: string;
      autofocus?: boolean;
      class?: string;
      contenteditable?: boolean;
      contextmenu?: string;
      dir?: string;
      draggable?: boolean;
      enterkeyhint?: string;
      exportparts?: string;
      hidden?: boolean;
      id?: string;
      inputmode?: string;
      is?: string;
      itemid?: string;
      itemprop?: string;
      itemref?: string;
      itemscope?: boolean;
      itemtype?: string;
      lang?: string;
      nonce?: string;
      part?: string;
      popover?: string;
      role?: string;
      slot?: string;
      spellcheck?: boolean;
      style?: string;
      tabindex?: number;
      title?: string;
      translate?: "yes" | "no";
      virtualkeyboardpolicy?: string;

      // Event handlers
      "on:abort"?: (event: Event) => void;
      "on:autocomplete"?: (event: Event) => void;
      "on:autocompleteerror"?: (event: Event) => void;
      "on:blur"?: (event: FocusEvent) => void;
      "on:cancel"?: (event: Event) => void;
      "on:canplay"?: (event: Event) => void;
      "on:canplaythrough"?: (event: Event) => void;
      "on:change"?: (event: Event) => void;
      "on:click"?: (event: MouseEvent) => void;
      "on:close"?: (event: Event) => void;
      "on:contextmenu"?: (event: MouseEvent) => void;
      "on:cuechange"?: (event: Event) => void;
      "on:dblclick"?: (event: MouseEvent) => void;
      "on:drag"?: (event: DragEvent) => void;
      "on:dragend"?: (event: DragEvent) => void;
      "on:dragenter"?: (event: DragEvent) => void;
      "on:dragexit"?: (event: Event) => void;
      "on:dragleave"?: (event: DragEvent) => void;
      "on:dragover"?: (event: DragEvent) => void;
      "on:dragstart"?: (event: DragEvent) => void;
      "on:drop"?: (event: DragEvent) => void;
      "on:durationchange"?: (event: Event) => void;
      "on:emptied"?: (event: Event) => void;
      "on:ended"?: (event: Event) => void;
      "on:error"?: (event: ErrorEvent) => void;
      "on:focus"?: (event: FocusEvent) => void;
      "on:input"?: (event: Event) => void;
      "on:invalid"?: (event: Event) => void;
      "on:keydown"?: (event: KeyboardEvent) => void;
      "on:keypress"?: (event: KeyboardEvent) => void;
      "on:keyup"?: (event: KeyboardEvent) => void;
      "on:load"?: (event: Event) => void;
      "on:loadeddata"?: (event: Event) => void;
      "on:loadedmetadata"?: (event: Event) => void;
      "on:loadstart"?: (event: Event) => void;
      "on:mousedown"?: (event: MouseEvent) => void;
      "on:mouseenter"?: (event: MouseEvent) => void;
      "on:mouseleave"?: (event: MouseEvent) => void;
      "on:mousemove"?: (event: MouseEvent) => void;
      "on:mouseout"?: (event: MouseEvent) => void;
      "on:mouseover"?: (event: MouseEvent) => void;
      "on:mouseup"?: (event: MouseEvent) => void;
      "on:mousewheel"?: (event: WheelEvent) => void;
      "on:pause"?: (event: Event) => void;
      "on:play"?: (event: Event) => void;
      "on:playing"?: (event: Event) => void;
      "on:progress"?: (event: ProgressEvent) => void;
      "on:ratechange"?: (event: Event) => void;
      "on:reset"?: (event: Event) => void;
      "on:resize"?: (event: UIEvent) => void;
      "on:scroll"?: (event: Event) => void;
      "on:seeked"?: (event: Event) => void;
      "on:seeking"?: (event: Event) => void;
      "on:select"?: (event: Event) => void;
      "on:stalled"?: (event: Event) => void;
      "on:submit"?: (event: Event) => void;
      "on:suspend"?: (event: Event) => void;
      "on:timeupdate"?: (event: Event) => void;
      "on:toggle"?: (event: Event) => void;
      "on:volumechange"?: (event: Event) => void;
      "on:waiting"?: (event: Event) => void;
    };
  };

  interface Component {
    (properties?: { [key: string]: any }, children?: Node[]): Node;
  }
}
