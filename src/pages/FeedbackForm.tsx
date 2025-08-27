import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/enhanced-card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { StarRating } from "@/components/StarRating";
import { ArrowLeft, User, Send, CheckCircle } from "lucide-react";
import svhecLogo from "@/assets/svhec-logo.png";

const FeedbackForm = () => {
  const { subjectId } = useParams();
  const [currentTeacherIndex, setCurrentTeacherIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Mock data - in real app, this would come from API
  const subject = {
    id: 1,
    name: "Machine Learning",
    code: "CS301",
    teachers: [
      {
        id: 1,
        name: "Dr. Priya Sharma",
        designation: "Associate Professor",
        department: "Computer Science"
      },
      {
        id: 2,
        name: "Prof. Ankit Verma",
        designation: "Assistant Professor",
        department: "Computer Science"
      }
    ]
  };

  const questions = [
    "How would you rate the teacher's knowledge of the subject?",
    "How effective was the teaching methodology?",
    "How well did the teacher explain complex concepts?",
    "How would you rate the teacher's interaction with students?",
    "Overall, how would you rate this teacher's performance?"
  ];

  const [ratings, setRatings] = useState<Record<number, number>>({});
  const [comments, setComments] = useState("");

  const currentTeacher = subject.teachers[currentTeacherIndex];
  const isLastTeacher = currentTeacherIndex === subject.teachers.length - 1;

  const handleRatingChange = (questionIndex: number, rating: number) => {
    setRatings(prev => ({
      ...prev,
      [questionIndex]: rating
    }));
  };

  const handleSubmit = async () => {
    const allQuestionsRated = questions.every((_, index) => ratings[index] > 0);
    
    if (!allQuestionsRated) {
      alert("Please rate all questions before submitting.");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      
      if (isLastTeacher) {
        setIsComplete(true);
      } else {
        // Move to next teacher
        setCurrentTeacherIndex(currentTeacherIndex + 1);
        setRatings({});
        setComments("");
      }
    }, 1500);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background">
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
            </div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto px-4 py-16">
          <Card variant="elevated" className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-success" />
              </div>
              <CardTitle className="text-2xl text-success">Feedback Submitted Successfully!</CardTitle>
              <CardDescription className="text-lg">
                Thank you for your valuable feedback on {subject.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Your feedback has been recorded and will help improve the quality of education at SVHEC.
                </p>
                <Link to="/dashboard">
                  <Button variant="gradient" size="lg">
                    Return to Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
            
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">
              {subject.name} ({subject.code})
            </h2>
            <Badge variant="outline">
              Teacher {currentTeacherIndex + 1} of {subject.teachers.length}
            </Badge>
          </div>
          
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentTeacherIndex + 1) / subject.teachers.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Teacher Info */}
        <Card variant="gradient" className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <User className="h-6 w-6 text-primary" />
              {currentTeacher.name}
            </CardTitle>
            <CardDescription>
              {currentTeacher.designation} • {currentTeacher.department}
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Feedback Questions */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Rate Your Experience</CardTitle>
            <CardDescription>
              Please rate each aspect on a scale of 1-5 stars (5 being excellent)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {questions.map((question, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-medium text-foreground">
                    {index + 1}. {question}
                  </h4>
                  <div className="flex items-center gap-4">
                    <StarRating
                      value={ratings[index] || 0}
                      onChange={(value) => handleRatingChange(index, value)}
                      size="lg"
                    />
                    {ratings[index] && (
                      <span className="text-sm text-muted-foreground">
                        ({ratings[index]} star{ratings[index] !== 1 ? 's' : ''})
                      </span>
                    )}
                  </div>
                </div>
              ))}

              {/* Comments Section */}
              <div className="space-y-3 pt-6 border-t">
                <h4 className="font-medium text-foreground">
                  Additional Comments (Optional)
                </h4>
                <Textarea
                  placeholder="Share any additional feedback or suggestions..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t">
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  variant="gradient"
                  size="lg"
                  className="w-full"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      {isLastTeacher ? "Submit Final Feedback" : "Next Teacher"}
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FeedbackForm;