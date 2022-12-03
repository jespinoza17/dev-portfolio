import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data
import { Blog } from "../data";
// Icons
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

const linkedInUrl = 'https://www.linkedin.com/in/espinoza-juan/';

export default function SocialLinks() {
  const { blog, html_url, twitter_username } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaGithub />
      </a>
      {blog && (
        <a href={blog} aria-label="External link" className="link-icons">
          {Blog}
        </a>
      )}
      <a
        href={`https://twitter.com/${twitter_username}`}
        aria-label="Check out my Twitter!"
        className="link-icons"
      >
        <FaTwitter />
      </a>
      <a
        href={linkedInUrl}
        aria-label="Check out my LinkedIn."
        className="link-icons"
      >
        <FaLinkedin />
      </a>
    </StyledSocialLinks>
  );
}
