import { Component, Prop, h, Host, Method } from '@stencil/core';
import { IPattern, Patterns } from "./patternList";

@Component({
  tag: 'css-pattern',
  styleUrl: 'css-pattern.css',
  shadow: true
})
export class CssPattern {
  /**
   * Pattern name to display
   */
  @Prop() pattern: string;

  /**
   * Selectes a pattern calculated from the input. Displays always the same pattern if the input stays the same.
   */
  @Prop() patternFor: string;

  /**
   * Returns a pattern calculated from the input. Returns always the same pattern if the input stays the same.
   */
  @Method()
  async getPatternFromExternalTitle(name: string): Promise<IPattern> {
    return this._getPatternFromExternalTitle(name);
  }

  /**
  * Returns a pattern object. If it can't find the pattern it returns the first pattern in the list.
  */
  @Method()
  async getPatternFromPatternName(name: string): Promise<IPattern> {
    return this._getPatternFromPatternName(name);
  }

  /**
  * Returns a list of all available pattern objects.
  */
  @Method()
  async getAllAvailablePatterns(): Promise<IPattern[]> {
    return Patterns;
  }

  private _getPatternFromExternalTitle(name: string): IPattern {
    const position = Math.round(name.length / 2);
    const code = name.charCodeAt(position) % Patterns.length;

    return Patterns[code];
  }

  private _getPatternFromPatternName(name: string): IPattern {
    const index = Patterns.findIndex(pattern => pattern.name === name);

    return index !== -1 ? Patterns[index] : Patterns[0];
  }

  render() {
    const pattern: IPattern = this.patternFor ? this._getPatternFromExternalTitle(this.patternFor) : this._getPatternFromPatternName(this.pattern);

    return (
      <Host title={pattern.title} data-author-url={pattern.authorUrl} data-author={pattern.author}>
        <div class={pattern.name}><slot /></div>
      </Host>
    );
  }
}
