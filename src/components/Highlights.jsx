import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Highlights from './ui/Highlight'

const  Highlight() {
  return (
    <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className='Section__title'>
                  Why Choose <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                  <Highlight 
                  icon={<FontAwesomeIcon icon="bolt" />}
                  title="Easy and Quick"
                  para="get access to the book you purchased online instantly"
                  />
                  <Highlight 
                  icon={<FontAwesomeIcon icon="book-open" />}
                  title="10,000+ books"
                  para="Library has books in all your favourite categories"
                  />
                  <Highlight 
                  icon={<FontAwesomeIcon icon="tags" />}
                  title="Affordable"
                  para="Get your hands on popular books for as little as $10"
                  />
                </div>
            </div>
        </div>
    </section>
  )
}
asas


export default Highlights;

