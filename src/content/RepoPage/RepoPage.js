import React from 'react';

const RepoPage = () => {
  return (
    <div>
      <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
        <div className="bx--row repo-page__r1">
          <div className="bx--col-lg-16">
            <RepoTable headers={headers} rows={rows} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoPage;
