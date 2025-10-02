(async () => {
  try {
    const payload = {
      name: 'Test User',
      email: 'test@example.com',
      mobile: '1234567890',
      company: 'ACME',
      subject: 'Hello',
      designation: 'CEO',
      requirement: 'Testing'
    };

  const post = await fetch('http://localhost:7000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    console.log('POST status', post.status);
    console.log('POST body', await post.text());

  const get = await fetch('http://localhost:7000/api/contact');
    console.log('GET status', get.status);
    const text = await get.text();
    console.log('GET body length', text.length);
  } catch (e) {
    console.error('Error testing API:', e);
  }
})();
