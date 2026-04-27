import '@sections/Experience.css'
import exp1 from '@assets/experience/experience-1.webp'
import exp2 from '@assets/experience/experience-2.webp'

function Experience() {
  return (
    <section className="experience section-padding" id="experience">
      <h2 className="text-l experience-heading">
        More Than Coffee. <br /> A Lifestyle
      </h2>

      <div className="experience-images">
        <img
          className="experience-img-main"
          src={exp1}
          alt="Verde Brew Co. interior"
        />
        <img
          className="experience-img-secondary"
          src={exp2}
          alt="Friends enjoying coffee"
        />
      </div>

      <p className="text-body experience-desc">
        Step into Verde Brew Co. and experience a space designed to slow you
        down. Natural light, recycled interiors, and community-centered events
        make us more than just a coffee stop — we&apos;re a hub for conscious
        living.
      </p>
    </section>
  )
}

export default Experience
