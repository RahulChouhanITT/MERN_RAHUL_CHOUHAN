const AboutPage = () => {
  return (
    <div style={{ padding: "1.5rem", maxWidth: "900px" }}>
      <h1>About BookShelf</h1>

      <p>
        <strong>BookShelf</strong> is a simple and user-friendly web application
        designed to help users explore, search, and manage books efficiently.
        The platform focuses on providing a clean browsing experience with
        powerful filtering and favourite management features.
      </p>

      <h2>Key Features</h2>

      <ul>
        <li>
          <strong>Search by Book Title:</strong>  
          Easily search books using the title to quickly find what you are
          looking for.
        </li>

        <li>
          <strong>Filter by Authors:</strong>  
          Narrow down books using author-based filters derived dynamically from
          the available book data.
        </li>

        <li>
          <strong>Filter by Page Count:</strong>  
          Explore books based on page ranges such as short reads or lengthy
          references.
        </li>

        <li>
          <strong>Favourite Books:</strong>  
          Mark books as favourites and manage them easily. Favourite selections
          are stored securely and persist across sessions.
        </li>

        <li>
          <strong>Detailed Book View:</strong>  
          View additional details of a book using the details option for better
          insights.
        </li>
      </ul>

      <h2>How It Works</h2>

      <p>
        Book data is fetched dynamically from the backend and displayed in a
        structured card-based layout. Users can combine search and filters to
        refine results effectively. Favourite books are tracked using a smart
        storage mechanism, ensuring performance and data consistency.
      </p>

      <h2>Purpose</h2>

      <p>
        This project demonstrates modern frontend development practices using
        React, custom hooks, reusable components, and clean UI patterns. It is
        built with scalability and maintainability in mind.
      </p>
    </div>
  );
};

export default AboutPage;
