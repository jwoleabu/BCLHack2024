import requests

def get_member_bills_by_name(member_name):
    # Define the API endpoint
    url = f"https://members-api.parliament.uk/api/Members/Search?name={member_name}"
    
    # Make the GET request to the API
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()
        
        # Check if any members were found
        if data['items']:
            # Return the member ID of the first member found
            member_id = data['items'][0]['value']['id']

            # Define the API endpoint
            url = f"https://members-api.parliament.uk/api/Members/{member_id}/Voting"

            # Define the headers
            headers = {
                'accept': 'text/plain'
            }

            # Define the query parameters
            params = {
                'house': '1'
            }

            # Make the GET request to the API
            response = requests.get(url, headers=headers, params=params)

            # Check if the request was successful
            if response.status_code == 200:
                # Parse the JSON response
                data = response.json()
    
                # Initialize an empty string to store all bills
                all_bills_html = "<html><body>"
    
                # Extract title and inAffirmativeLobby for each bill
                for bill in data['items']:
                    title = bill['value']['title']
                    in_affirmative_lobby = bill['value']['inAffirmativeLobby']
        
                    # Concatenate title and inAffirmativeLobby into the string
                    all_bills_html += f"<h2>{title}</h2>"
                    all_bills_html += f"<p>In Affirmative Lobby: {in_affirmative_lobby}</p><br>"
                
                all_bills_html += "</body></html>"
                
                return all_bills_html
            else:
                print(f"Failed to retrieve data: {response.status_code}")
                return None
        else:
            print(f"No member found with the name '{member_name}'")
            return None
    else:
        print(f"Failed to retrieve data: {response.status_code}")
        return None

# Example usage:
member_name = "Rishi Sunak"  # Replace with the name of the candidate you want to search for
member_policies_html = get_member_bills_by_name(member_name)

if member_policies_html:
    with open("member_policies.html", "w") as file:
        file.write(member_policies_html)
    print("HTML file created successfully.")
