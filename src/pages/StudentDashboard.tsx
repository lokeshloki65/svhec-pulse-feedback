import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, User, Star, Clock, LogOut, MessageSquare } from "lucide-react";
import svhecLogo from "@/assets/svhec-logo.png";

const StudentDashboard = () => {
  const [student] = useState({
    name: "Rahul Kumar",
    rollNumber: "20AI001",
    year: "3rd Year",
    department: "AI & Data Science",
    email: "rahul.kumar@svhec.edu.in"
  });

  const subjects = [
    {
      id: 1,
      name: "Machine Learning",
      code: "CS301",
      teachers: ["Dr. Priya Sharma", "Prof. Ankit Verma"],
      feedbackStatus: "pending",
      feedbackCount: 0,
      totalTeachers: 2
    },
    {
      id: 2,
      name: "Deep Learning",
      code: "CS302",
      teachers: ["Dr. Suresh Patel", "Dr. Meera Singh"],
      feedbackStatus: "completed",
      feedbackCount: 2,
      totalTeachers: 2
    },
    {
      id: 3,
      name: "Data Structures & Algorithms",
      code: "CS303",
      teachers: ["Prof. Rajesh Gupta"],
      feedbackStatus: "partial",
      feedbackCount: 1,
      totalTeachers: 1
    },
    {
      id: 4,
      name: "Database Management Systems",
      code: "CS304",
      teachers: ["Dr. Kavita Joshi", "Prof. Amit Kumar"],
      feedbackStatus: "pending",
      feedbackCount: 0,
      totalTeachers: 2
    },
    {
      id: 5,
      name: "Software Engineering",
      code: "CS305",
      teachers: ["Dr. Ravi Shankar"],
      feedbackStatus: "pending",
      feedbackCount: 0,
      totalTeachers: 1
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="default" className="bg-success text-success-foreground">Completed</Badge>;
      case "partial":
        return <Badge variant="secondary">Partial</Badge>;
      default:
        return <Badge variant="outline">Pending</Badge>;
    }
  };

  const completedFeedbacks = subjects.filter(s => s.feedbackStatus === "completed").length;
  const totalSubjects = subjects.length;
  const progressPercentage = (completedFeedbacks / totalSubjects) * 100;

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
                <p className="text-sm text-muted-foreground">Feedback Portal</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className="text-sm font-medium">{student.name}</p>
                <p className="text-xs text-muted-foreground">{student.rollNumber}</p>
              </div>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {student.name}!
          </h2>
          <p className="text-muted-foreground">
            {student.year} • {student.department} • {student.rollNumber}
          </p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card variant="gradient">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Total Subjects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{totalSubjects}</div>
            </CardContent>
          </Card>

          <Card variant="gradient">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-success" />
                Completed Feedback
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">{completedFeedbacks}</div>
            </CardContent>
          </Card>

          <Card variant="gradient">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{Math.round(progressPercentage)}%</div>
              <div className="w-full bg-muted rounded-full h-2 mt-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subjects Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Your Subjects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <Card key={subject.id} variant="interactive">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{subject.name}</CardTitle>
                      <CardDescription>{subject.code}</CardDescription>
                    </div>
                    {getStatusBadge(subject.feedbackStatus)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-1">Teachers:</p>
                      <div className="space-y-1">
                        {subject.teachers.map((teacher, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <User className="h-3 w-3 text-muted-foreground" />
                            <span className="text-sm">{teacher}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <span>Feedback Progress:</span>
                      <span className="font-medium">
                        {subject.feedbackCount}/{subject.totalTeachers}
                      </span>
                    </div>

                    <Link to={`/feedback/${subject.id}`}>
                      <Button 
                        variant={subject.feedbackStatus === "completed" ? "outline" : "gradient"} 
                        className="w-full"
                      >
                        {subject.feedbackStatus === "completed" ? "View Feedback" : "Give Feedback"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Need Help?
            </CardTitle>
            <CardDescription>
              Get assistance with the feedback system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="flex-1">
                View Instructions
              </Button>
              <Button variant="outline" className="flex-1">
                Contact Support
              </Button>
              <Button variant="gradient" className="flex-1">
                Open Chatbot
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;