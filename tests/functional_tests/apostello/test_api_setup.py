from time import sleep

import pytest
from tests.functional_tests.utils import click_and_wait

URI = '/api-setup/'


@pytest.mark.django_db
@pytest.mark.slow
@pytest.mark.selenium
class TestAPISetup:
    def test_api_setup(self, live_server, browser_in, users, driver_wait_time):
        """Test api-setup form."""
        no_api_token_txt = 'No API Token'
        b = browser_in
        browser_in.get(live_server + URI)
        # delete token that doesn't exist
        del_button = b.find_elements_by_xpath('/html/body/div[3]/div/div[2]/form[2]/button')[0]
        click_and_wait(del_button, driver_wait_time)
        assert no_api_token_txt in b.page_source
        # generate token for first time
        assert no_api_token_txt in b.page_source
        regen_button = b.find_elements_by_xpath('/html/body/div[3]/div/div[2]/form[1]/button')[0]
        click_and_wait(regen_button, driver_wait_time)
        assert no_api_token_txt not in b.page_source
        # regenerate token
        regen_button = b.find_elements_by_xpath('/html/body/div[3]/div/div[2]/form[1]/button')[0]
        click_and_wait(regen_button, driver_wait_time)
        assert no_api_token_txt not in b.page_source
        # delete token
        del_button = b.find_elements_by_xpath('/html/body/div[3]/div/div[2]/form[2]/button')[0]
        click_and_wait(del_button, driver_wait_time)
        assert no_api_token_txt in b.page_source
