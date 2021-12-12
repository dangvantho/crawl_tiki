module.exports =  (id, pid) => {
  return {
    method: 'GET',
    url: `https://tiki.vn/api/v2/products/${id}?platform=web&spid=${pid}`,
    //   url: 'http://localhost:8000/test',
    headers: {
      'accept': ' application/json',
      'accept-encoding': ' gzip, deflate, br',
      'accept-language': ' en-US,en;q=0.9,vi;q=0.8',
      'authorization':
        ' Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzNDFhYmM0MDkyYjZmYzAzOGU0MDNjOTEwMjJkZDNlNDQ1MzliNTYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODY4NDkwNDMzMDI5LWpiNTRlbmo5ZmI0NzU5b24xb2FzODlwcHNhZGQ5MjhhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODY4NDkwNDMzMDI5LWpiNTRlbmo5ZmI0NzU5b24xb2FzODlwcHNhZGQ5MjhhLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA0MDI5NzI4NTUzMzY4MzU5MTkzIiwiaGQiOiJhem9vbS5qcCIsImVtYWlsIjoiaC5waGFuQGF6b29tLmpwIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ3NVNDTHBiSUhNZEF0Z05laVprbHFBIiwibm9uY2UiOiI2cmhFcm8yRk9yd0IxQjc3MEk0bU0iLCJpYXQiOjE2Mzg4NjU1NTIsImV4cCI6MTYzODg2OTE1MiwianRpIjoiZDM2ODQyYzZhN2VlYjI2Y2RiZmQ2ODEwMGUxOTY2Y2VkYThiYzI2MyJ9.bEmMK2zHtbMDL6GozdStrhcW0-Rc1R1T-oqeqU10LVdg05b1jGXHlJdtrqj5geAnxNudMU709_mlnUMOSA7SdIr3ANFOMNzDO4QOG3cHrcnQh3--GUsbSVqAiOJIt9TkuCeKbDbxhSWjud5dFkPl2R7X13NkUBNcV63cwR9vcnqPdSIuMZN0HAZw0hb-sQUgqNFLVhLaGXmeo3NbxfswJVj1uS9RKDLY1T7Pf9Mg-laZlEkHkSBDfT-29jr184qkwVtNdcnWpb1OCL9gJQtwBfo-3_mr4rXvfgXn3AZPhO0qROtSGhFzy5GkVo2ujWYLpUDtVg5QlF1FUqtMqFD6CQ',
      'cache-control': ' no-cache',
      'cookie':
        ' _ga=GA1.2.495408686.1622106678_trackity=3c195970-1d7d-41f0-c3f2-c2250ce708a0; _gcl_au=1.1.1111634307.1636800710; tiki_client_id=1715692848.1636800708; _hjid=3ad6cd65-64e9-401b-96e5-f75a7c2e612e; G_ENABLED_IDPS=google; G_AUTHUSER_H=0; delivery_zone=Vk4wMTYwMDUwMDY=; TOKENS={%22access_token%22:%22eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMjczMTUxNyIsImlhdCI6MTYzOTE5MjQwOCwiZXhwIjoxNjM5Mjc4ODA4LCJpc3MiOiJodHRwczovL3Rpa2kudm4iLCJjdXN0b21lcl9pZCI6IjEyNzMxNTE3IiwiY2xpZW50X2lkIjoidGlraS1zc28iLCJzY29wZSI6InNzbyJ9.VgYeZpGVrSfL5zU63Iqa31adWyN1n98aH_o-91s0q3py-sf83lJdPbgpNq9cahgxIQwl7_Lwk8QJOWzv84XM9vQTtHM8k2XFWMRXYq4Z2jkVrj5xW0DHEIwkpYTvT8F-2bLvviw4OZawW8eULatPPdafwBueAwnlcmxIBJWKp5uBBQ89RBRt06-DvBhPmhIqmCdnbpVzeJAYgoPOto_AChjpi_pq6DYfMggSxAmtaFTwQIidxdiZ6_bc6mp4Ngl2b68u77nfFhEdD6cY7izwMxRZ5nKR1lw8EnT-sqd8UQ0rxePcQcWNGoaHXtFRfqLuTrs1OERUd9wm_nwfTC7GX92VQiSu-0sLZxDzwA9jkqbcKA27ktRCEvB9i0VpmP7kVuWGfVKG7pxbw32G9EmhklQVsHknfSdI_7LaPmCoPpar3doXNk8t8IVB0zlz26uOTL8BYdUkd3sBQVcRmU4qflahJ4e0h_mWrg3KkScHtK3-oo_bzUtIAWH9e7MKqwjR00t4-R94Wb7di8OLTb7vOtj4L8uEw9bnNBmtxGD6H7DPxg2laj19uN3Qy7KR0_cZ9_VT_7k-vzK_A34fMRmcA6hDVmqV38oCgJGW8ie1O4y50Mqc5d9MqekC9TC7csMOxnipPQqFQ5lpqvbq95vuLX8tkQuERpKChgmyqvZw5qk%22%2C%22refresh_token%22:%22TKIASkPuKgva3-d62EfM5WBNCTyiMTo8UfpLw0_CspmPAxl3vtoprC5myg8_qscVuqdj0C4j_h4QIUPI40YS%22%2C%22token_type%22:%22bearer%22%2C%22expires_in%22:86400%2C%22expires_at%22:1639278808434%2C%22customer_id%22:12731517}; TIKI_ACCESS_TOKEN=eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMjczMTUxNyIsImlhdCI6MTYzOTE5MjQwOCwiZXhwIjoxNjM5Mjc4ODA4LCJpc3MiOiJodHRwczovL3Rpa2kudm4iLCJjdXN0b21lcl9pZCI6IjEyNzMxNTE3IiwiY2xpZW50X2lkIjoidGlraS1zc28iLCJzY29wZSI6InNzbyJ9.VgYeZpGVrSfL5zU63Iqa31adWyN1n98aH_o-91s0q3py-sf83lJdPbgpNq9cahgxIQwl7_Lwk8QJOWzv84XM9vQTtHM8k2XFWMRXYq4Z2jkVrj5xW0DHEIwkpYTvT8F-2bLvviw4OZawW8eULatPPdafwBueAwnlcmxIBJWKp5uBBQ89RBRt06-DvBhPmhIqmCdnbpVzeJAYgoPOto_AChjpi_pq6DYfMggSxAmtaFTwQIidxdiZ6_bc6mp4Ngl2b68u77nfFhEdD6cY7izwMxRZ5nKR1lw8EnT-sqd8UQ0rxePcQcWNGoaHXtFRfqLuTrs1OERUd9wm_nwfTC7GX92VQiSu-0sLZxDzwA9jkqbcKA27ktRCEvB9i0VpmP7kVuWGfVKG7pxbw32G9EmhklQVsHknfSdI_7LaPmCoPpar3doXNk8t8IVB0zlz26uOTL8BYdUkd3sBQVcRmU4qflahJ4e0h_mWrg3KkScHtK3-oo_bzUtIAWH9e7MKqwjR00t4-R94Wb7di8OLTb7vOtj4L8uEw9bnNBmtxGD6H7DPxg2laj19uN3Qy7KR0_cZ9_VT_7k-vzK_A34fMRmcA6hDVmqV38oCgJGW8ie1O4y50Mqc5d9MqekC9TC7csMOxnipPQqFQ5lpqvbq95vuLX8tkQuERpKChgmyqvZw5qk; TIKI_USER=isf0geGKdz%2Fo3gdKGz3k0h%2FmZj9rygMr7fHPdzHXPGxVtCic64cv7UTyL8NIjqpdxSt47040szQc; _gid=GA1.2.1157979288.1639192414; _hjSessionUser_522327=eyJpZCI6ImE1ZDE4YmYyLWU5NjQtNTZkOS04NmY3LTYyMTc5OThhNmVmMCIsImNyZWF0ZWQiOjE2MzkxOTI0MjExNzcsImV4aXN0aW5nIjp0cnVlfQ==; _hjMinimizedPolls=759015; TIKI_FE_VARIANT=fea92511-15f2-419e-a51e-3f3792025b73variant_code9bb1b353-e4b2-497f-8b09-b2674de1409f; TIKI_RECOMMENDATION=0caddb6c17d79abd4bd8860881f6ec3f; _hjIncludedInSessionSample=0; _hjAbsoluteSessionInProgress=1; TKSESSID=188588921c9475ad7215b1cc9b7185ba; amp_99d374_tiki.vn=BnCnWJ3SOPByadn4ki3PNA.MTI3MzE1MTc=..1fml2n9fi.1fml2no1q.r.1f.2a; _hjSession_522327=eyJpZCI6ImZlMmEzYWJmLTRlNTMtNGI2NS1iN2UwLTI0ZTI4OGY2NTNmNiIsImNyZWF0ZWQiOjE2MzkyMzc2OTk2NjN9; _ga=GA1.1.1715692848.1636800708; amp_99d374=BnCnWJ3SOPByadn4ki3PNA.MTI3MzE1MTc=..1fml2in92.1fml4fkqb.2k.44.6o; _ga_GSD4ETCY1D=GS1.1.1639237377.7.1.1639239374.0; cto_bundle=TIOUil9oTzRrOHJQWFBhdURnem9CeFQyQmZLdEdnbEQyS1Q2SXo2YjVTVkFlOUFJVEJUSmolMkZGS3ZHZGcxRzFWJTJCbXZNMEQ3N3NObUdGbmZtS3JTUjBHbktIcUxYczFWbU0xSjElMkI0UE54S0l2M2VPMWw1eTdMJTJCcHhKdXk2VzZXRmVMNHV5eFZzU3lOQjdYOTdIYTVWQThRJTJGUEdnJTNEJTNE',
      // origin: ' https://aapa.staging.azoom.jp',
      'pragma': ' no-cache',
      // referer: ' https://aapa.staging.azoom.jp/',
      'sec-ch-ua':
        ' "Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
      'sec-ch-ua-mobile': ' ?0',
      'sec-ch-ua-platform': ' "macOS"',
      'sec-fetch-dest': ' empty',
      'sec-fetch-mode': ' cors',
      'sec-fetch-site': ' same-site',
      'user-agent':
        ' Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
    },
  }
}
