import Layout from './components/Layout';


export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-white flex bold text-xl justify-center pt-5">
            Welcome to the WiCS website! This is the home page
          </h1>
        </div>
      </div>
    </Layout>

  );
}