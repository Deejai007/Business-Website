import React from "react";
import "./About.css";
function About() {
  return (
    <div align="center" className="AboutComp ScrollComp">
      {/* About hai ye */}
      <div className="homeHead">
        <h1>Why Us?</h1>
      </div>
      <div className="whyus">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iusto,
        earum quos, sequi voluptatem tempora, aut voluptates beatae rem nisi
        atque eius facilis?Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Voluptatibus mollitia ut rem, corporis nostrum quod adipisci
        quaerat, aliquam sunt dolore veritatis repellat? Hic.ldskjfldk sjflk
        sdjflk sdjflskd jflkds fdjljdsl lkdsfjldjfsf.Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptas iusto, earum quos, sequi
        voluptatem tempora, aut voluptates beatae rem nisi atque eius
        facilis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatibus mollitia ut rem, corporis nostrum quod adipisci quaerat,
        aliquam sunt dolore veritatis repellat? Hic.ldskjfldk sjflk sdjflk
        sdjflskd jflkds.
      </div>
      <div className="founders">
        <h1>Our Founders</h1>
      </div>
      <div className="founder" align="center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80 "
            width={200}
            alt=""
          />
          <p>Jason Carter</p>
          <p>Co-Founder Shopix.io</p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            width={200}
            alt=""
          />
          <p>Loiuse Williams</p>
          <p>Co-Founder & CEO Shopix.io</p>
        </div>
      </div>
      <p id="end">We started with 2, now we are a Team of over 300</p>
      <p>****************</p>
    </div>
  );
}

export default About;
