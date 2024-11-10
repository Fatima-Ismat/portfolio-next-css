import "../style/education.css";

function Education() {
  return (
    <main className="edu-main">
      <div className="edu-text">
        <h1>Education</h1>
        <p>
          trusted by professionals for Exceptional Quality and service our
          clints from various industries trust us to deliver top-notch quality
          and results. Here's what they have to say about our work..
        </p>
</div>
    <div className="box-con-edu">
      <div>
        <h1 className="uni-name">Univerty of Karachi</h1>
        <span>Completed</span>
        </div>
      <div className="computer">
      
      
          <h1>Academic Journey </h1>
          <p>In 2014 i enrolled in the University of Karachi to pursue a Bachlor's in Computer Science, combining academic knowlege with practical skills.</p>
      </div>
  </div>
 
  {/* box 2*/}
  <div className="box-con-edu">
    <div>
        <h1 className="uni-name">Governor IT Initiative</h1>
        <span>Student</span>
        </div>
      <div className="computer">
      
      
          <h1>Giaic-Reaching Quater 2</h1>
          <p>Through hard work i progressed in Quater 2, mastering Ai, Metaverse, Blockchain and tools like Next js and Tailwind css </p>
      </div>
  </div>
  
  {/* box 3 */}

  <div className="box-con-edu">
    <div>
        <h1 className="uni-name">Web Development</h1>
        <span>Student</span>
        </div>
      <div className="computer">
      
          <h1>Web-Journey</h1>
          <p>I started learning HTML, CSS and JavaScript building websites, freelancing and working on personal projects to sharpen my skills.</p>
      </div>
  </div>


</main>
  );
}

export default Education;
