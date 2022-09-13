import string


class YouTubeLessonManager:
    def __init__(self):
        self.lessons = {}

    def save(self, name, url):
        splitedURL = url.split("=")
        uniqeURL = str(splitedURL[1])

        lower_case_name = name.lower()
        lower_case_name_no_spaces = lower_case_name.replace(" ", "-")

        self.lessons[lower_case_name_no_spaces] = uniqeURL
        print(self.lessons)

    def get(self, name):
        lower_case_name = name.lower()
        lower_case_name_no_spaces = lower_case_name.replace(" ", "-")
        return "https://www.youtube.com/watch?v=" + str(
            self.lessons[lower_case_name_no_spaces]
        )


lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")

print(lesson_manager.lessons["for-loops"])  # outputs: OnDr4J2UXSA


print(
    lesson_manager.get("for-loops")
)  # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
