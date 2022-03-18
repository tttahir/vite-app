type Props = {
  name?: string
}

export function Hello({ name }: Props) {
  if (name) {
    return <h1>Hello, {name}!</h1>
  }

  return <span>Hey, stranger</span>
}
