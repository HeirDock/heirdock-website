import { Link } from "react-router-dom";
import Icon from "../../components/Icon";
import readinessUrl from "../../assets/images/use-cases/uc1-readiness.webp";
import coveredUrl from "../../assets/images/use-cases/uc1-covered.webp";
import designationsUrl from "../../assets/images/use-cases/uc2-designations.webp";
import intentionsUrl from "../../assets/images/use-cases/uc2-intentions.webp";
import claimUrl from "../../assets/images/use-cases/uc3-claim.webp";
import documentsUrl from "../../assets/images/use-cases/uc3-documents.webp";
import roomUrl from "../../assets/images/use-cases/uc4-room-mobile.webp";
import intentionPickerUrl from "../../assets/images/use-cases/uc4-intention-picker.webp";

// Each use case sits beside real screens from the app, captured on a demo
// household with made-up data. Images are 2x their displayed size; width and
// height are the files' own, so the browser reserves the right space.
export default function CustomerUseCases() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/customer" className="page-header__back"><Icon name="arrowBack" /> Back to For Families</Link>
          <h1 className="page-header__title">Use Cases</h1>
          <p className="page-header__subtitle">
            See how families use HeirDock to bring clarity to what they own.
          </p>
        </div>
      </section>

      {/* Insurance Readiness */}
      <section className="section section--white" id="insurance">
        <div className="container">
          <div className="feature-section feature-section--media">
            <div className="feature-section__content">
              <div className="feature-section__eyebrow">Insurance readiness</div>
              <h3>Know you're covered before you need to be</h3>
              <p>
                Most families can't produce a complete record of what they own when it's time to
                file a claim. After a fire, flood, or theft, they're left reconstructing it from memory.
              </p>
              <p>
                Coverage Insights shows how much of your household is claim-ready: on a policy, with a
                current value, and with the photos and receipts to prove it.
              </p>
              <p>
                Each gap comes with a clear next step, like which jewelry to schedule on your policy or
                which pieces are due for a fresh appraisal.
              </p>
            </div>
            <div className="screen-stack screen-stack--insurance">
              <img
                className="screen-shot"
                src={readinessUrl}
                width={1300}
                height={392}
                loading="lazy"
                decoding="async"
                alt="Coverage Insights in the app: 60% claim-ready, with the value that is ready, needs attention, or is not on a policy"
              />
              <img
                className="screen-shot screen-stack__float"
                src={coveredUrl}
                width={700}
                height={622}
                loading="lazy"
                decoding="async"
                alt="The Covered card: 94% on a policy, listing jewelry that exceeds the unscheduled limit and items not on any policy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Estate Planning */}
      <section className="section" id="estate">
        <div className="container">
          <div className="feature-section feature-section--media feature-section--reverse">
            <div className="feature-section__content">
              <div className="feature-section__eyebrow">Estate planning</div>
              <h3>Pass things on with the story intact</h3>
              <p>
                Families often don't know the full scope of what a loved one owns, and the stories
                behind the most meaningful pieces are easily lost.
              </p>
              <p>
                Name a Steward and an Alternate to look after the household, a Care Steward for when
                you need a hand, and beneficiaries - a person, a group, or a trust. For any item,
                record your intention, who it's meant for, and why, in your own words.
              </p>
              <p>
                Share a Beneficiary Assignment Report with your estate attorney to make planning simpler.
              </p>
            </div>
            <div className="screen-stack screen-stack--estate">
              <img
                className="screen-shot"
                src={designationsUrl}
                width={1240}
                height={1032}
                loading="lazy"
                decoding="async"
                alt="Household Designations in the app: a Steward, an Alternate Steward, a Care Steward, and beneficiaries including a family trust"
              />
              <img
                className="screen-shot screen-stack__float"
                src={intentionsUrl}
                width={900}
                height={296}
                loading="lazy"
                decoding="async"
                alt="An item's intention: Gift, intended for a family member, with a personal note"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disaster Recovery */}
      <section className="section section--white" id="disaster">
        <div className="container">
          <div className="feature-section feature-section--media">
            <div className="feature-section__content">
              <div className="feature-section__eyebrow">Disaster recovery</div>
              <h3>Your record is safe, even when your home isn't</h3>
              <p>
                After a fire, flood, or burglary, it's hard to remember everything you owned, let
                alone prove it.
              </p>
              <p>
                Your photos, values, appraisals and receipts are stored in HeirDock, not in the house.
              </p>
              <p>
                Start a claim from your policy, describe what happened, attach the affected items, and
                download it as a PDF for your insurer.
              </p>
            </div>
            <div className="screen-stack screen-stack--recovery">
              <img
                className="screen-shot"
                src={claimUrl}
                width={1240}
                height={765}
                loading="lazy"
                decoding="async"
                alt="A claim in the app: Basement flood - washer supply line, with cause of loss, narrative and date of loss"
              />
              <img
                className="screen-shot screen-stack__float"
                src={documentsUrl}
                width={728}
                height={362}
                loading="lazy"
                decoding="async"
                alt="An item's documents: an appraisal report and a service receipt"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Moving & Downsizing */}
      <section className="section" id="moving">
        <div className="container">
          <div className="feature-section feature-section--media feature-section--reverse">
            <div className="feature-section__content">
              <div className="feature-section__eyebrow">Moving and downsizing</div>
              <h3>Decide what stays, what goes, and who it goes to</h3>
              <p>
                Downsizing means deciding what happens to a lifetime of belongings, often on a deadline
                and with the whole family weighing in.
              </p>
              <p>
                Go room by room and set an intention for each item: Keep, Sell, Gift, Donate, or
                Undecided for now. Note who a gift is for, and share the collection with family so
                everyone can see the plan before moving day.
              </p>
            </div>
            <div className="screen-stack screen-stack--moving">
              <div className="screen-phone">
                <div className="screen-phone__screen">
                  <img
                    src={roomUrl}
                    width={540}
                    height={1062}
                    loading="lazy"
                    decoding="async"
                    alt="The Living Room on a phone: eight items with photos, categories and values"
                  />
                </div>
              </div>
              <img
                className="screen-shot screen-stack__float"
                src={intentionPickerUrl}
                width={888}
                height={1064}
                loading="lazy"
                decoding="async"
                alt="Change intention: Keep, Sell, Gift, Donate or Undecided, each with a short description"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="container">
          <h2 className="cta-band__title">Start building your household record</h2>
          <p className="cta-band__subtitle">
            Whatever your reason, HeirDock gives you clarity and control.
          </p>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get in Touch <Icon name="arrowForward" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
