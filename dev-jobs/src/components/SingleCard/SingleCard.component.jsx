import { JobCard, CompanyLogo, JobCardLocation, JobCardPosition, JobInfos, JobInfosDivider } from "./SingleCard.styled";

export const SingleCard = () => {
  return (
    <JobCard>
      <CompanyLogo />
      <JobInfos>
        <p>5h ago</p>
        <JobInfosDivider />
        <p>Full Time</p>
      </JobInfos>
      <a href="single-job.html">
        <JobCardPosition>Senior Software Engineer</JobCardPosition>
      </a>
      <p>Scoot</p>
      <JobCardLocation>United Kingdom</JobCardLocation>
    </JobCard>
  );
};
