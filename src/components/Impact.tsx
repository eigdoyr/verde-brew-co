import impact1 from '@assets/impact-1.webp'
import impact2 from '@assets/impact-2.webp'
import impact3 from '@assets/impact-3.webp'
import impact4 from '@assets/impact-4.webp'

function Impact() {
  return (
    <section className="impact" id="impact">
      <div className="impact-collage">
        <img
          className="collage-img collage-img--1"
          src={impact1}
          alt="Ethically sourced coffee cherries"
        />
        <img
          className="collage-img collage-img--2"
          src={impact2}
          alt="Friends enjoying coffee"
        />
        <img
          className="collage-img collage-img--3"
          src={impact3}
          alt="Plastic-free cups"
        />
        <img
          className="collage-img collage-img--4"
          src={impact4}
          alt="Community gardening"
        />
      </div>

      <div className="impact-body">
        <h2 className="text-l impact-heading">
          Every Sip Makes <br /> a Difference.
        </h2>

        <div className="impact-values">
          <div className="impact-value">
            <h3 className="text-m">Ethically Sourced Beans</h3>
            <p className="text-body">
              We partner directly with farmers who practice fair trade and
              organic cultivation.
            </p>
          </div>

          <div className="impact-value">
            <h3 className="text-m">Eco-Friendly Materials</h3>
            <p className="text-body">
              100% compostable packaging, reusable options, and plastic-free
              operations.
            </p>
          </div>

          <div className="impact-value">
            <h3 className="text-m">Community & Impact</h3>
            <p className="text-body">
              Supporting local sustainability projects and giving back with
              every purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Impact
