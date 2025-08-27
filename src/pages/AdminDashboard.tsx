import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StarRating } from "@/components/StarRating";
import { 
  Users, 
  BookOpen, 
  Star, 
  TrendingUp, 
  BarChart3, 
  Download,
  Settings,
  LogOut
} from "lucide-react";
import svhecLogo from "@/assets/svhec-logo.png";

const AdminDashboard = () => {
  const [stats] = useState({
    totalStudents: 247,
    totalTeachers: 15,
    totalSubjects: 8,
    completedFeedbacks: 189,
    averageRating: 4.2
  });

  const feedbackData = [
    {
      teacher: "Dr. Priya Sharma",
      subject: "Machine Learning",
      responses: 45,
      averageRating: 4.5,
      ratings: [4.2, 4.6, 4.3, 4.7, 4.5],
      performance: 90
    },
    {
      teacher: "Prof. Ankit Verma",
      subject: "Machine Learning",
      responses: 42,
      averageRating: 4.1,
      ratings: [4.0, 4.2, 3.9, 4.3, 4.1],
      performance: 82
    },
    {
      teacher: "Dr. Suresh Patel",
      subject: "Deep Learning",
      responses: 38,
      averageRating: 4.3,
      ratings: [4.1, 4.4, 4.2, 4.5, 4.3],
      performance: 86
    },
    {
      teacher: "Dr. Meera Singh",
      subject: "Deep Learning",
      responses: 40,
      averageRating: 4.0,
      ratings: [3.8, 4.1, 3.9, 4.2, 4.0],
      performance: 80
    },
    {
      teacher: "Prof. Rajesh Gupta",
      subject: "Data Structures",
      responses: 24,
      averageRating: 3.8,
      ratings: [3.5, 3.9, 3.7, 4.0, 3.8],
      performance: 76
    }
  ];

  const getPerformanceBadge = (performance: number) => {
    if (performance >= 85) return <Badge className="bg-success text-success-foreground">Excellent</Badge>;
    if (performance >= 75) return <Badge variant="default">Good</Badge>;
    if (performance >= 65) return <Badge variant="secondary">Average</Badge>;
    return <Badge variant="destructive">Needs Improvement</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b shadow-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img src={svhecLogo} alt="SVHEC Logo" className="h-10 w-10 rounded-full" />
              <div>
                <h1 className="text-xl font-bold text-foreground">SVHEC Admin</h1>
                <p className="text-sm text-muted-foreground">Feedback Management</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
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
            Admin Dashboard
          </h2>
          <p className="text-muted-foreground">
            Monitor and analyze student feedback data
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card variant="gradient">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Students
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalStudents}</div>
            </CardContent>
          </Card>

          <Card variant="gradient">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Teachers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalTeachers}</div>
            </CardContent>
          </Card>

          <Card variant="gradient">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Subjects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{stats.totalSubjects}</div>
            </CardContent>
          </Card>

          <Card variant="gradient">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-success" />
                Responses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">{stats.completedFeedbacks}</div>
            </CardContent>
          </Card>

          <Card variant="gradient">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Avg Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.averageRating}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="detailed">Detailed Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card variant="elevated">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Teacher Performance Overview</CardTitle>
                  <CardDescription>
                    Summary of feedback ratings for all teachers
                  </CardDescription>
                </div>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Report
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {feedbackData.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-lg">{item.teacher}</h4>
                          <p className="text-muted-foreground">{item.subject}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{item.averageRating}</span>
                          </div>
                          {getPerformanceBadge(item.performance)}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Question-wise Ratings:
                          </p>
                          <div className="space-y-2">
                            {item.ratings.map((rating, idx) => (
                              <div key={idx} className="flex items-center justify-between">
                                <span className="text-sm">Q{idx + 1}</span>
                                <div className="flex items-center gap-2">
                                  <StarRating value={rating} onChange={() => {}} readOnly size="sm" />
                                  <span className="text-sm w-8">{rating}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Response Statistics:
                          </p>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm">Total Responses:</span>
                              <span className="font-medium">{item.responses}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm">Performance Score:</span>
                              <span className="font-medium">{item.performance}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-primary h-2 rounded-full transition-all duration-500"
                                style={{ width: `${item.performance}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="detailed" className="space-y-6">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Detailed Performance Reports
                </CardTitle>
                <CardDescription>
                  In-depth analysis and downloadable reports
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Button variant="outline" className="h-20 flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    Download Subject-wise Report
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    Download Teacher-wise Report
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    Download Student Response Report
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Download className="h-6 w-6 mb-2" />
                    Download Complete Analytics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Visual charts and trend analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Analytics Coming Soon</h3>
                  <p className="text-muted-foreground">
                    Interactive charts and advanced analytics will be available here.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;