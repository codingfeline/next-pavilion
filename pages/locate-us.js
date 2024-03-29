import Head from 'next/head'

const LocateUs = () => {
  return (
    <>
      <Head>
        <title>Locate us - Bangkok Pavilion | Thai Restaurant in Deal, Kent, UK</title>
        <meta description="Location page of Bangkok Pavilion restaurant in Deal, Kent UK" />
        <meta keywords="Thai food, Deal Kent UK, location, Bangkok Pavilion" />
      </Head>
      <div className="flex p-4 w-full min-h-fit ">
        <iframe
          className="w-full rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.6333847725305!2d1.4006320157596472!3d51.22582897958988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47deaecf9db0a93f%3A0xfe914440a6b5f45f!2s114+High+St%2C+Deal+CT14!5e0!3m2!1sen!2suk!4v1498062611907"
          height="100%"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}

export default LocateUs
