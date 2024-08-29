import Feed from '@components/Feed';
import FormValidation from '@components/FormValidation'

const Home = () => {
  return (
    <>
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Powered Prompts</span>
      </h1>
      <p className="desc text-center">
         My first next app is developed on the basis of JS Mastery. To create, and share knowledge.
      </p>

      {/*<Feed />*/}
      
      
    </section>
    <FormValidation></FormValidation>
    </>
  )
}

export default Home