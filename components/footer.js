import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Co-created with ♥️ by <a href="https://twitter.com/jamesgardin_">JamesGardin.eth</a>, <a href="https://twitter.com/iampatjunior">patjunior.eth</a>, and <a href="https://twitter.com/almndbtr">almndbtr.eth</a>.
          </h3>
        </div>
      </Container>
    </footer>
  )
}
