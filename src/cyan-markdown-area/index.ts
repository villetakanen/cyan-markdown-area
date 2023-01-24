import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'


@customElement('cn-markdown-area')
export class CyanMarkdownArea extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: relative;
      width: 100%;
      transition: none;
      height: auto;
      border-radius: 0 12px 0 0;
      background: var(--cyan-background-field, #f0f0f0);
      border-bottom: 1px solid var(--cyan-border-color-field, #e0e0e0);
    }
    :host textarea {
      resize: none;
      background: none;
      border: none;
      margin: 0;
      padding: 0 8px;
      padding-top: 16px;
      width: calc(100% - 16px);
      transition: none;
      font-family: var(--cyan-font-family-field, sans-serif);
      font-size: var(--cyan-font-size-field, 14px);
      color: var(--cyan-color-field, black);
    }
  `

  @property({type: String, reflect: true})
    value = ''
  render() {
    return html`<textarea>${this.value}</textarea>`
  }
}

declare global {
    interface HTMLElementTagNameMap {
      'cn-markdown-area': CyanMarkdownArea
    }
  }
  