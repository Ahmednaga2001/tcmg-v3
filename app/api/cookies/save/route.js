export async function POST(req) {
  try {
    const preferences = await req.json(); 
    const essentialCookie = 'true'; 
    const functionalCookie = preferences.functional ? 'true' : 'false';
    const analyticsCookie = preferences.analytics ? 'true' : 'false';
    const advertisingCookie = preferences.advertising ? 'true' : 'false';
console.log(essentialCookie, functionalCookie, analyticsCookie, advertisingCookie);

    return new Response(
      JSON.stringify({ message: 'Preferences saved successfully' }),
      {
        status: 200,
        headers: {
          'Set-Cookie': [
            `essential=${essentialCookie}; Max-Age=31536000; Path=/ ;SameSite=None; Secure`,
            `functional=${functionalCookie}; Max-Age=31536000; Path=/ ; SameSite=None; Secure`,
            `analytics=${analyticsCookie}; Max-Age=31536000; Path=/ ; SameSite=None; Secure`,
            `advertising=${advertisingCookie}; Max-Age=31536000; Path=/ ; SameSite=None; Secure`,
       
          ],
        },
      }
    );
  } catch (error) {
    console.error('Error handling POST request:', error);
    return new Response(
      JSON.stringify({ message: 'Error saving preferences' }),
      { status: 500 }
    );
  }
}
