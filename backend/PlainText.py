import requests

def get_member_id_by_name(member_name):
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
            return member_id

def get_member_bills_by_name(member_name):
    member_id = get_member_id_by_name(member_name)
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
        all_bills_html = ""
    
        # Extract title and inAffirmativeLobby for each bill
        for bill in data['items']:
            title = bill['value']['title']
            in_affirmative_lobby = bill['value']['inAffirmativeLobby']
        
            # Concatenate title and inAffirmativeLobby into the string
            all_bills_html += f"{title}, "
            all_bills_html += f"In Affirmative Lobby: {in_affirmative_lobby}"
                
        return all_bills_html
    
def get_member_id_by_postcode(postcode):
    # Define the API endpoint for finding an MP by postcode
    url = f"https://members-api.parliament.uk/api/Location/Constituency/Search?searchText={postcode}"
    
    # Make the GET request to the API
    response = requests.get(url)
    
    # Check if the request was successful
    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()
        
        # Check if any constituency was found
        if data['items']:
            # Return the MP ID of the first constituency found
            member_id = data['items'][0]['value']['id']
            return member_id

def get_member_name_by_id(member_id):
    url = f"https://members-api.parliament.uk/api/Members/{member_id}"

    # Make the GET request to the API
    response = requests.get(url)

    if response.status_code == 200:
        # Parse the JSON response
        data = response.json()

        if data['value']:
            return data['value']['nameDisplayAs']
        
def get_info_by_postcode(postcode):
    ID = get_member_id_by_postcode(postcode)
    str = f"Member ID: {ID}"
    name = get_member_name_by_id(ID)
    str += f" Member Name: {name}"
    bills = get_member_bills_by_name(name)
    str += f" Bills: {bills}"
    return str

# Example usage:
#member_name = "Rishi Sunak"  # Replace with the name of the candidate you want to search for
#member_policies_string = get_member_bills_by_name(member_name)
#member_id = get_member_id_by_name(member_name)
#print(member_id)
#member_name = get_member_name_by_id(member_id)
#print(member_name)
print(get_info_by_postcode("NG35RD"))
#print(member_policies_string)
