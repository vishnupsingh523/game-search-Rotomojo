import "../css/Creator.css";
import { Link } from "react-router-dom";
const Creator = () => {
	return (
		<div className="creator-content">
			<div className="img-content">
				<img src="images/vishnu.jpg" />
			</div>
			<h1>Vishwanath Pratap Singh</h1>
			<div className="content">
				<p>
					I'm Vishwanath Pratap Singh, a competitive programmer, Front-end
					eveloper and Tech Enthusiast. I have worked on many web development
					and DBMS projects such as:
				</p>
				<Link to="https://vishnupsingh523.github.io/Covid19-WebApp-by-Vishnu/">
					Covid_19 web-app
				</Link>
				<Link to="https://vishnupsingh523.github.io/realbricks.github.io/">
					Real Estate Website
				</Link>

				<br />

				Expertise in some popular programming languages like:
				<ul>
					<li>C++</li>
					<li>Java</li>
				</ul>
				<br />
				Web-development:
				<ul>
					<li>HTML5</li>
					<li>CSS</li>
					<li>Javascript</li>
					<li>React.js</li>
					<li>Node.js</li>
					<li>Express.js</li>
				</ul>
			</div>
		</div>
	);
};

export default Creator;
