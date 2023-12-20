import Footer, {FooterMain, FooterColumn, FooterSection, FooterSectionElement, FooterSectionHeader, FooterBottom, FooterCaption, FooterAdditionalText, FooterCaptionElement} from "../components/footer/index"

function FooterMainPage() {
    return (
        <Footer>
            <FooterMain>
                <FooterColumn>
                    <FooterSection>
                        <FooterSectionHeader>
                            About Us
                        </FooterSectionHeader>
                        <FooterSectionElement>
                            Our Mission
                        </FooterSectionElement>
                        <FooterSectionElement>
                            Our Team
                        </FooterSectionElement>
                        <FooterSectionElement>
                            Contact
                        </FooterSectionElement>
                    </FooterSection>
                </FooterColumn>
                <FooterColumn>
                    <FooterSection>
                        <FooterSectionHeader>
                            Legal
                        </FooterSectionHeader>
                        <FooterSectionElement>
                            Privacy Policy
                        </FooterSectionElement>
                        <FooterSectionElement>
                            Terms of Service
                        </FooterSectionElement>
                        <FooterSectionElement>
                            FAQ
                        </FooterSectionElement>
                    </FooterSection>
                </FooterColumn>
                <FooterColumn>
                    <FooterSection>
                        <FooterSectionHeader>
                            Navigation
                        </FooterSectionHeader>
                        <FooterSectionElement>
                            Site Map
                        </FooterSectionElement>
                        <FooterSectionElement>
                            Disclaimers
                        </FooterSectionElement>
                        <FooterSectionElement>
                            Accesibility
                        </FooterSectionElement>
                    </FooterSection>
                </FooterColumn>
                <FooterColumn>
                    <FooterSection>
                        <FooterSectionHeader>
                            Find Us
                        </FooterSectionHeader>
                        <FooterSectionElement>
                            Facebook
                        </FooterSectionElement>
                        <FooterSectionElement>
                            Instagram
                        </FooterSectionElement>
                        <FooterSectionElement>
                            X
                        </FooterSectionElement>
                        <FooterSectionElement link="https://pornhub.com/gay">
                            Hub
                        </FooterSectionElement>
                    </FooterSection>
                </FooterColumn>
                <FooterColumn>
                    <FooterSection>
                        <FooterSectionHeader>
                            Partenrships
                        </FooterSectionHeader>
                        <FooterSectionElement>
                            Our partners
                        </FooterSectionElement>
                        <FooterSectionElement>
                            Become an Affiliate
                        </FooterSectionElement>
                        <FooterSectionElement>
                            Sponsorships
                        </FooterSectionElement>
                    </FooterSection>
                </FooterColumn>
            </FooterMain>
            <FooterBottom>
                <FooterCaption>
                    <FooterCaptionElement link={"https://mylink.com"}>
                        Copyright
                    </FooterCaptionElement>
                    <FooterCaptionElement link={"https://mylink.com"}>
                        Cool link
                    </FooterCaptionElement>
                    <FooterCaptionElement link={"https://mylink.com"}>
                        Cool link 2
                    </FooterCaptionElement>
                </FooterCaption>
            </FooterBottom>
        </Footer>
    )
}

export default FooterMainPage;