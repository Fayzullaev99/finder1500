import React from 'react'

function About() {
  return (
    <div className='about'>
      <div className="container">
        <h1 className="about__title">Github Finder</h1>
        <h3 className="about__subTitle">This Web Project For Testing</h3>
        <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit at, cum, soluta dignissimos aliquam quae reiciendis magni hic repellat earum commodi in autem quo distinctio eligendi tempora recusandae beatae reprehenderit?</p>
        <a href="tel:+9989945645623" className='about__contact'><span>Support Call:</span> +9989945645623</a>
        <a href="mailto:example@gmail.com" className='about__contact'><span>Support Email:</span> example@gmail.com</a>
      </div>
    </div>
  )
}

export default About