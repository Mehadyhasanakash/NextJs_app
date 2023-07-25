import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-fll flex-center flex-col">
      <h1 className="head_text text-center" >
        Discover & Share
       <br className="max-md:hidden" />

       <span className="orange_gradient">AI-Powered Prompts</span>
        
        </h1>
        <p className="desc text-center">Promptopia is an open-source AI Prompting tool for modern world To discover, create and share creative promts</p>

        {/* Feed */}

        <Feed/>

    </section>
  )
}

export default Home;
