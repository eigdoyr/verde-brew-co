import '@sections/Movement.css'
import movement1 from '@assets/movement/movement-1.webp'

function Movement() {
  return (
    <section className="movement" id="contact">
      <div className="movement-content">
        <h2 className="text-xl movement-heading">Be Part of the Movement</h2>

        <div className="movement-right">
          <p className="text-body movement-desc">
            Good coffee should never cost the Earth. Join our community of
            eco-conscious coffee lovers and be the first to know about new
            brews, events, and sustainability initiatives
          </p>

          <img
            className="movement-img"
            src={movement1}
            alt="Community of coffee lovers"
          />
        </div>
      </div>
    </section>
  )
}

export default Movement
