import "./sectionTitle.scss";

interface SectionTitleProps {
  iconName: string;
  title: string;
}

const SectionTitle = (props: SectionTitleProps) => {
  let { iconName, title } = props;
  return (
    <div className="a-sectiontitle-container">
      <div className="a-sectiontitle-pusher"></div>
      <div className="a-sectiontitle-contents">
        <img
          src={
            require(`../../../../assets/account_review_tool/images/${iconName}-white.svg`)
              .default
          }
          alt={iconName}
        />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
