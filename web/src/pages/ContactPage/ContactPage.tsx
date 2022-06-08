import { MetaTags } from '@redwoodjs/web'
import Contact from 'src/components/Contact/Contact'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Contact />
    </>
  )
}

export default ContactPage
