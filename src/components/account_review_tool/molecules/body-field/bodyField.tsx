import MaxedStats from "../../atoms/maxed-stats/maxedStats";
import "./bodyField.scss";
import units from "../../../../assets/account_review_tool/images/Units.png";
import espers from "../../../../assets/account_review_tool/images/Espers.png";
import vcs from "../../../../assets/account_review_tool/images/VisionCards.png";
import gear from "../../../../assets/account_review_tool/images/Equipment.png";

type Resource = {
  bodyIdx: string;
  imgSrc: string;
  keyword: string;
};
interface BodyFieldProps {
  type: string;
  maxedStat: number;
  text: string;
}

const RESOURCE_INFO: {
  [key: string]: Resource;
} = {
  units: {
    bodyIdx: "first",
    imgSrc: units,
    keyword: "units",
  },
  espers: {
    bodyIdx: "second",
    keyword: "espers",
    imgSrc: espers,
  },
  vcs: {
    keyword: "vcs",
    bodyIdx: "third",
    imgSrc: vcs,
  },
  gear: {
    keyword: "gear",
    bodyIdx: "fourth",
    imgSrc: gear,
  },
};

const BodyField = (props: BodyFieldProps) => {
  const { maxedStat, text, type } = props;
  const { bodyIdx, imgSrc, keyword } = RESOURCE_INFO[type];

  const dlength = text ? text.length : 0;
  const wlength = window.innerWidth;

  return (
    <div className="m-bodyfield-container">
      <img
        className={`m-bodyfield-categoryimg--${keyword}`}
        src={imgSrc}
        alt="category"
      />
      <div className={`m-bodyfield-body ${bodyIdx}`}>
        <MaxedStats type={keyword} maxedStat={maxedStat} />
        <div className="m-bodyfield-description">
          {wlength >= 1024 ? (
            <>
              <p
                style={
                  dlength >= 990
                    ? { fontSize: 6 + "px" }
                    : { fontSize: 7 + "px" }
                }
              >
                {text}
              </p>
            </>
          ) : (
            <>
              <p
                style={
                  dlength >= 990
                    ? { fontSize: 0.4 + "vh" }
                    : { fontSize: 0.5 + "vh" }
                }
              >
                {text}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyField;
