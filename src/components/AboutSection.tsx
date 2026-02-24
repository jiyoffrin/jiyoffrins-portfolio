import aboutImg from "@/assets/about-illustration.png";

const AboutSection = () => (
  <section id="about" className="section-padding section-alt">
    <div className="container mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-12">
        About <span className="gradient-text">Me</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate Software Developer with hands-on experience in backend development using <strong className="text-foreground">Java</strong> and <strong className="text-foreground">Spring Boot</strong>. I've built RESTful APIs, implemented secure authentication using JWT, and worked with databases like MySQL and MongoDB.
          </p>
          <p>
            I completed my B.E. in Computer Science Engineering and gained practical experience through training and internships, where I developed backend modules for real-time applications and full-stack projects.
          </p>
          <p>
            I'm eager to grow as a Java Backend Developer, continuously learning new technologies and improving problem-solving skills, with a goal of building scalable and efficient applications.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={aboutImg} alt="Coding workspace" className="rounded-2xl max-w-sm w-full shadow-lg" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
