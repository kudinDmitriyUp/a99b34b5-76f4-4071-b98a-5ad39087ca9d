"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Trophy, Target, Zap, Brain, Activity, Shield, Users, Calendar, Quote, Instagram, Twitter, Globe, Linkedin, Mail } from "lucide-react";

const assetMap = [
  {
    id: "placeholder",
    url: "https://via.placeholder.com/800x600",
    alt: "Placeholder image"
  }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="grid"
      cardStyle="glass-flat"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Team", id: "team" },
            { name: "Training", id: "features" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="BVB United"
          button={{
            text: "Join Team",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Schwarz-Gelbe Leidenschaft Vereint"
          description="Join our dedicated football team inspired by the legendary spirit of Borussia Dortmund. Train with passion, play with pride, compete in black and yellow."
          tag="BVB United"
          tagIcon={Trophy}
          buttons={[
            {
              text: "Join Our Team",
              href: "contact"
            },
            {
              text: "Watch Training",
              href: "features"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/gdfd4d1a02364dffeb407df7f181be5e2653095799373e0ba36b15f44013258e97cafb689d73cd524f297ec15baff8daafcb67b65cf58af3c20175650dbc0344d_1280.jpg",
              imageAlt: "Football player training"
            },
            {
              imageSrc: "https://pixabay.com/get/g2cb186a647422a2a9dc297f63f0c9d99e1c076889d81271858c21cfdc3ab85b56e7c0f0c15a95f04e521e75622c5a8726f9cef88c0d59247b03bbd06d7c912a4_1280.jpg",
              imageAlt: "Soccer ball on field"
            },
            {
              imageSrc: "https://pixabay.com/get/gdf0bd6f561f58d01ce6c04a384d93bf924ae62c4ca838a5dde024a0b6fa84af72a3d6c706233eda1da6132f2eb470e747ad58d763cb3abfd59e0e97cc16a4a83_1280.jpg",
              imageAlt: "Football coach"
            },
            {
              imageSrc: "https://pixabay.com/get/g6219ddd9bfe0c5834deab1a4658ba03a7823eda1c65fbb76a19eb62cb69293888347972d5b971f7f9a1dc72376c38673152fad8e2abdbf08f67411253cd82751_1280.jpg",
              imageAlt: "Team celebration"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="We build champions through dedication, teamwork, and relentless pursuit of excellence. Our football family creates lasting bonds both on and off the pitch, living the Schwarz-Gelb spirit."
          buttons={[
            {
              text: "Meet Our Coach",
              href: "team"
            },
            {
              text: "Learn More",
              href: "features"
            }
          ]}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Training Programs"
          description="Comprehensive football training designed to develop every aspect of your game with BVB-inspired intensity"
          tag="Excellence"
          tagIcon={Target}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              title: "Technical Skills",
              description: "Master ball control, passing accuracy, and shooting techniques through progressive drills and personalized coaching in the BVB tradition",
              icon: Zap,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Tactical Awareness",
              description: "Develop game intelligence, positioning, and strategic thinking inspired by the legendary Dortmund playing style",
              icon: Brain,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Physical Conditioning",
              description: "Build strength, speed, and endurance with sports-specific fitness programs tailored to high-intensity football demands",
              icon: Activity,
              button: {
                text: "Learn More",
                href: "contact"
              }
            },
            {
              title: "Mental Preparation",
              description: "Strengthen focus, confidence, and resilience to perform under pressure with the fighting spirit of true champions",
              icon: Shield,
              button: {
                text: "Learn More",
                href: "contact"
              }
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardThree
          title="Our Achievements"
          description="Numbers that reflect our commitment to excellence and development in the BVB tradition"
          tag="Success"
          tagIcon={Award}
          textboxLayout="default"
          animationType="blur-reveal"
          gridVariant="uniform-all-items-equal"
          metrics={[
            {
              id: "1",
              icon: Users,
              title: "Active Players",
              value: "35+"
            },
            {
              id: "2",
              icon: Trophy,
              title: "Tournaments Won",
              value: "12"
            },
            {
              id: "3",
              icon: Calendar,
              title: "Years Experience",
              value: "8"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Team"
          description="Get to know the dedicated players and coaching staff behind our success, united in black and yellow"
          tag="Team"
          tagIcon={Users}
          textboxLayout="default"
          animationType="scale-rotate"
          gridVariant="uniform-all-items-equal"
          members={[
            {
              id: "1",
              name: "Marcus Johnson",
              role: "Captain & Midfielder",
              description: "Team leader with 6 years experience. Known for exceptional passing accuracy and tactical awareness on the field, embodying the BVB spirit.",
              imageSrc: "https://pixabay.com/get/gdf5d6416b70dbb171817c6d928286cd8528c8d042e486462c2e7ea183ae4898b9b5b3b9e18cde5832a4e36b7cbd0a94f85591d96dab40f25ddbbf1dd38beaf70_1280.jpg",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/marcus"
                },
                {
                  icon: Twitter,
                  url: "https://twitter.com/marcus"
                }
              ]
            },
            {
              id: "2",
              name: "David Rodriguez",
              role: "Defender",
              description: "Solid defensive player with strong aerial ability and leadership qualities. A wall in black and yellow, joined the team 4 years ago.",
              imageSrc: "https://pixabay.com/get/g9b166763a10e0d020aa447236284adb2b4049cb8b81ffed2c22ef3402ce790aee28241e17e949df8ae689e6581a5975c593d10506260f6847d4185050c766b89_1280.jpg",
              socialLinks: [
                {
                  icon: Instagram,
                  url: "https://instagram.com/david"
                }
              ]
            },
            {
              id: "3",
              name: "Alex Thompson",
              role: "Striker",
              description: "Clinical finisher with pace and technical skill. Top scorer for the past 3 seasons with incredible work ethic and the killer instinct.",
              imageSrc: "https://pixabay.com/get/g7af9b02d43b195790e4e67d4b1ad3a8c29e6ecd86c78411faad2ce0da780f75f4216d0b7e64f71f0e26c5610ca53b1b8a2279b3308adddcd7258399bca5557d1_1280.jpg",
              socialLinks: [
                {
                  icon: Twitter,
                  url: "https://twitter.com/alex"
                },
                {
                  icon: Globe,
                  url: "https://alexthompson.com"
                }
              ]
            },
            {
              id: "4",
              name: "Coach Michael Smith",
              role: "Head Coach",
              description: "Former professional player with 15 years coaching experience. Specialized in youth development and tactical analysis with BVB philosophy.",
              imageSrc: "https://pixabay.com/get/g73a2a6ceb9265ab469e78a28b0a320fcf49f805ac3bec34e7438c4751fec6b8df91b594ee6753db1016b00c24e7b66b25446af6a19c755eb3387c0a32ec09943_1280.jpg",
              socialLinks: [
                {
                  icon: Linkedin,
                  url: "https://linkedin.com/in/coachsmith"
                },
                {
                  icon: Mail,
                  url: "mailto:coach@bvbunited.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Community Says"
          description="Hear from players, parents, and supporters about their BVB United experience"
          tag="Testimonials"
          tagIcon={Quote}
          textboxLayout="default"
          animationType="opacity"
          testimonials={[
            {
              id: "1",
              name: "Sarah Martinez",
              role: "Team Parent",
              testimonial: "The coaching quality and team spirit at BVB United is exceptional. My son has grown not just as a player but as a person through this amazing program with true BVB values.",
              imageSrc: "https://pixabay.com/get/gbffca776a2e2cae49795418fef28b557a4c3fbc508c721f1ad205eeeb724cebd3d1eeff594e4cf2c2c81ab692e6152246573c29bbe3416c4d3cf15996f4bf187_1280.jpg"
            },
            {
              id: "2",
              name: "James Wilson",
              role: "Former Player",
              testimonial: "BVB United gave me the foundation I needed to pursue football at college level. The technical training and mental preparation with the fighting spirit were game-changers.",
              imageSrc: "https://pixabay.com/get/ga3804a32eb9e8111cd8df8d67a3ddb0677e773deb4d6ea0248f75602daddee5b0a3b37e0de5f90ad38902c444c4086c6ce952a038377f1f4cf1795f2ccaf956d_1280.jpg"
            },
            {
              id: "3",
              name: "Emma Thompson",
              role: "Community Supporter",
              testimonial: "This team represents everything positive about youth sports. The dedication of coaches and the development of young athletes in the BVB tradition is truly inspiring.",
              imageSrc: "https://pixabay.com/get/gdae5f638e35bc79762d289a68fc4f640863ad0a1f858e5b17e19a2f7bd17edf7259d8dd8525d03d4eecd18a40540f6ea0d1f9392fc7a9cea07e6f17f59ae5c62_1280.jpg"
            },
            {
              id: "4",
              name: "Robert Chen",
              role: "Current Player",
              testimonial: "Joining BVB United was the best decision I made. The training is intense but rewarding, and the team chemistry in black and yellow is incredible both on and off the field.",
              imageSrc: "https://pixabay.com/get/gd6bce50f42b7d5518a7a6b9c55a2865bc733364c4a591cfe77b983b2733fe7b3bf50f8ea8d3abcd99d71dbc633854f58c9b600ed957d282f9806fc935938fe13_1280.jpg"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Join Our Football Family"
          description="Ready to take your game to the next level with BVB United? Get in touch with us to learn about tryouts, training sessions, and how to become part of our black and yellow family."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "age",
              type: "number",
              placeholder: "Age",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your football experience and goals with BVB United...",
            rows: 5,
            required: true
          }}
          imageSrc="https://pixabay.com/get/g70040429763ab7ccb3498860b225aefbbb39b73a525c0cc0005610be20e6f63abe6ad81bac465981e115164e939d090f7ec0c68d85c8d1cfe500ebb2eaf0aa34_1280.jpg"
          buttonText="Send Message"
          onSubmit={null}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="BVB United"
          columns={[
            {
              items: [
                {
                  label: "Training Programs",
                  href: "features"
                },
                {
                  label: "Team Roster",
                  href: "team"
                },
                {
                  label: "Coaching Staff",
                  href: "about"
                }
              ]
            },
            {
              items: [
                {
                  label: "Join Team",
                  href: "contact"
                },
                {
                  label: "Tryout Info",
                  href: "contact"
                },
                {
                  label: "Contact Coach",
                  href: "contact"
                }
              ]
            },
            {
              items: [
                {
                  label: "Match Schedule",
                  href: "https://bvbunited-schedule.com"
                },
                {
                  label: "Team News",
                  href: "https://bvbunited-news.com"
                },
                {
                  label: "Photo Gallery",
                  href: "https://bvbunited-gallery.com"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}