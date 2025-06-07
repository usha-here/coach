import HeroSection from "@/components/hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { features } from "@/data/features";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <HeroSection />
      <section>
        <div>
          <h2>Powerful Features for your career growth</h2>
          <div>
            {features.map((feature, index) => {
              return (
                <Card>
                  <CardContent>
                    <div>{feature.icon}
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
