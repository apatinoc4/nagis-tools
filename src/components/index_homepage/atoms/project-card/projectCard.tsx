import "./projectCard.scss";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActions } from "@mui/material";
import Typography from "@mui/material/Typography";

interface ProjectCardProps {
  image: string;
  index: number;
  mobile?: boolean;
  projectName: string;
  projectDescription: string;
  url: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { image, index, mobile, projectName, projectDescription, url } = props;

  return (
    <Card className="projectCard" sx={{ maxWidth: 400 }}>
      <CardMedia
        component="img"
        height="140"
        src={require(`../../../../assets/index_homepage/backgrounds/${image}`)}
        alt="alt"
      />
      <CardContent className={`${mobile && "mobile"}`}>
        <Typography
          className="projectCard-tittle"
          gutterBottom
          variant="h5"
          component="div"
        >
          {index + 1}. {projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {projectDescription}
        </Typography>
      </CardContent>

      <CardActions className="projectCard-actions">
        <Button size="small" color="primary">
          <Link to={url}>Let's go!</Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
