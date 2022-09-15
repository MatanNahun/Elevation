import json

# Opening JSON file
f = open("nyc_jobs.json")

# returns JSON object as
# a dictionary
data = json.load(f)

# Iterating through the json
# list
# for i in data:
#     print(i)

print(len(data))


def find_jobs_by_word(word):
    filterd_data = [job for job in data if word in job["job_description"]]
    return filterd_data


print(len(find_jobs_by_word("experience")))  # 165


def find_agencies_junior_Jobs():
    entry_level_jobs = set(
        [job["agency"] for job in data if job["career_level"] == "Entry-Level"]
    )
    not_in_brooklin = set(
        [job["agency"] for job in data if "Broadway" in job["work_location"]]
    )

    result = entry_level_jobs & not_in_brooklin
    print("broadway", result)


find_agencies_junior_Jobs()


hourly = set(
    [job["salary_range_to"] for job in data if job["salary_frequency"] == "Hourly"]
)
entry_level = set(
    [job["salary_range_to"] for job in data if job["career_level"] != "Entry-Level"]
)
res = hourly & entry_level
print("max", max(res))


# Closing file
f.close()
