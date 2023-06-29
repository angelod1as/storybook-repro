import BEMHelper, { WordSet } from "react-bem-helper"

type Styles = {
  readonly [key: string]: string
}

type ClassNames = (
  element?: string,
  modifiers?: WordSet,
  extra?: WordSet,
) => string

/**
 * Creates a wrapped function for react-bem-helper with loaded css modules. This allows us to use a
 * compromise between object spreads using `...bem()` (which is not allowed in
 * our eslint rules for jsx elements) and `className={bem()}`. Instead
 * of returning an object with a propery `className`, the value of `className`
 * will be returned. This allows to write `className={bem()}`
 */
function create(styles: Styles, name: string): ClassNames {
  const bem = new BEMHelper({ name, outputIsString: true })

  return (element, modifiers, extra) => {
    const className = bem(element, modifiers, extra)
    const classNames = className.split(" ")

    return classNames.map((key) => styles[key] || key).join(" ")
  }
}

export { create }
