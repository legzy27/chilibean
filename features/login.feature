Feature: User navigate to https://chillipharm.com/sign_in and enter login details I see error message 
      

    @dev
    Scenario: Navigate to chillibean login page and click on login button I see error message

    Given I navigate chillibean login page "https://chillipharm.com/sign_in"
     When I click on the sign in button error message appear
    Then I enter incorrect "email"and "password" error message appears


   @dev
  Scenario Outline: Enter incorrect  username and password 3 times Account Lockout: Warning
     
     Given I enter incorrect "<email>" and "<password>"
     When I click sign in button error message warning appears
    Examples:
      | email             |  password         | 
      | cloudp@yahoo.com  |  paswordsx        |
      | tim@yahoo.com     |  paswordsxd       |
      | time@yahoo.com    |  paswordsxdd      |

 
  @dev
  Scenario Outline: Enter incorrect  username and password 5 times Account Lockout
     Given I enter incorrect "<email>" and "<password>" again

    Examples:
      | email              |  password         | 
      | cloudpp@yahoo.com  |  paswordsxx       |
      | cloudppp@yahoo.com |  paswordsxxx      | 
      | cloudx@yahoo.com   |  paswordsxz       |
      | cloudppy@yahoo.com |  paswordsxxy      |
     



   