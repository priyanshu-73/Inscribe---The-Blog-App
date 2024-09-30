import { Footer as FooterComp } from "flowbite-react";
import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <FooterComp className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <span className="text-xl font-semibold mt-4">Inscribe</span>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
          <div>
            <FooterComp.Title title="About" />
            <FooterComp.LinkGroup className="flex flex-col gap-2">
              <FooterComp.Link
                href="https://www.100jsprojects.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                100 JS Projects
              </FooterComp.Link>
              <FooterComp.Link
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
              >
                Priyanshu's Blogs
              </FooterComp.Link>
            </FooterComp.LinkGroup>
          </div>
          <div>
            <FooterComp.Title title="Follow us" />
            <FooterComp.LinkGroup className="flex flex-col gap-2">
              <FooterComp.Link
                href="https://github.com/priyanshu-73"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </FooterComp.Link>
              <FooterComp.Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </FooterComp.Link>
            </FooterComp.LinkGroup>
          </div>
          <div>
            <FooterComp.Title title="Legals" />
            <FooterComp.LinkGroup className="flex flex-col gap-2">
              <FooterComp.Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </FooterComp.Link>
              <FooterComp.Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </FooterComp.Link>
            </FooterComp.LinkGroup>
          </div>
        </div>
        <FooterComp.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterComp.Copyright
            className="text-lg"
            href="#"
            by="Inscribe"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 m-4 sm:justify-center">
            <FooterComp.Icon href="#" icon={BsFacebook} />
            <FooterComp.Icon href="#" icon={BsInstagram} />
            <FooterComp.Icon href="#" icon={BsGithub} />
            <FooterComp.Icon href="#" icon={BsTwitter} />
            <FooterComp.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </FooterComp>
  );
};

export default Footer;
