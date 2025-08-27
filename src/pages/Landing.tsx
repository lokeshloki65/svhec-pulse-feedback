import { Link } from "react-router-dom";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Star, 
  Users, 
  BarChart3, 
  MessageSquare, 
  Shield,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import svhecLogo from "@/assets/svhec-logo.png";

const Landing = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Student-Centric",
      description: "Easy-to-use interface designed specifically for student feedback"
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Smart Rating System",
      description: "Interactive star ratings with comprehensive question sets"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Real-time Analytics",
      description: "Live dashboard with detailed performance insights"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "AI Chatbot Support",
      description: "Integrated chatbot for instant help and guidance"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Secure & Anonymous",
      description: "Protected feedback system with optional anonymity"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Educational Focus",
      description: "Built specifically for academic institutions"
    }
  ];

  const stats = [
    { number: "500+", label: "Students" },
    { number: "25+", label: "Teachers" },
    { number: "15+", label: "Subjects" },
    { number: "98%", label: "Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={svhecLogo} alt="SVHEC Logo" className="h-10 w-10 rounded-full" />
              <div>
                <h1 className="text-xl font-bold text-foreground">SVHEC</h1>
                <p className="text-sm text-muted-foreground">Sri Venkateswara Higher Education College</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline">Student Login</Button>
              </Link>
              <Link to="/admin">
                <Button variant="gradient">Admin Portal</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">
              Welcome to SVHEC Feedback Portal
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Student Feedback<br />
              <span className="text-blue-200">Management System</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Empowering students to share valuable feedback and helping teachers improve their teaching methodology through comprehensive analytics and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" variant="hero" className="min-w-[200px]">
                  Get Started
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built with modern technology and educational best practices in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} variant="interactive">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    {feature.icon}
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, secure, and effective feedback process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Login Securely</h3>
              <p className="text-muted-foreground">
                Students log in with their college credentials to access the feedback portal
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Rate Teachers</h3>
              <p className="text-muted-foreground">
                Provide ratings and feedback for each teacher across multiple criteria
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Generate Insights</h3>
              <p className="text-muted-foreground">
                Admins access comprehensive analytics to improve teaching quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Education?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join SVHEC in revolutionizing the feedback process and improving educational quality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" variant="hero" className="min-w-[200px]">
                <CheckCircle className="h-5 w-5 mr-2" />
                Start Giving Feedback
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src={svhecLogo} alt="SVHEC Logo" className="h-10 w-10 rounded-full" />
                <div>
                  <h3 className="text-lg font-bold">SVHEC</h3>
                  <p className="text-sm text-gray-300">Feedback Portal</p>
                </div>
              </div>
              <p className="text-gray-300">
                Sri Venkateswara Higher Education College - Leading the way in educational excellence.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/login" className="hover:text-white">Student Login</Link></li>
                <li><Link to="/admin" className="hover:text-white">Admin Portal</Link></li>
                <li><a href="#" className="hover:text-white">Help & Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Email: admin@svhec.edu.in</li>
                <li>Phone: +91 123 456 7890</li>
                <li>Address: College Campus, City</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <p className="text-gray-300 text-sm">
                This feedback management system helps improve the quality of education through student insights and data-driven decisions.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 SVHEC. All rights reserved. | Built with ❤️ for better education</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;