declare const document: any;

export class HtmlHelper {
  public static appendElementToBody(elementMarkup: string) {
    document.body.insertAdjacentHTML('beforeend', elementMarkup);
  }
}
