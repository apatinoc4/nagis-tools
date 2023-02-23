import "./overviewField.scss";

interface OverviewFieldProps {
  description: string;
  title: string;
}

const OverviewField = (props: OverviewFieldProps) => {
  const { title, description } = props;
  return (
    <div className="a-overviewfield-container">
      <p>{title}</p>
      <div className="a-overviewfield-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default OverviewField;
