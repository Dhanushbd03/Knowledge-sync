import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { Trophy, Clock, Users } from "lucide-react";
import data from "../assets/data/challenges.json";

const FilterButton = styled.button`
  ${tw`px-4 py-2 rounded-lg transition-colors duration-200 text-white border-2 hover:border-Lynch`}
  ${(props) => (props.active ? tw`border-DiSerria ` : tw`border-PuertoRico `)}
`;

const ChallengeCard = styled.div`
  ${tw`border border-PuertoRico rounded-lg p-6 shadow-md transition-transform duration-300 hover:border-DiSerria hover:scale-105`}
`;
const Box = styled.div`
  ${tw`flex space-x-4 mb-6 overflow-x-scroll`}
  &::-webkit-scrollbar {
    height: 0;
  }
`;
const Title = styled.h1`
${tw`text-3xl z-10 font-bold text-transparent bg-clip-text relative bg-gradient-to-r from-white via-DiSerria to-DiSerria pb-10 md:pb-20 text-center lg:text-4xl md:text-nowrap w-80  md:w-full mx-auto text-balance`}
`;
const ProjectChallenge = () => {
  const [filter, setFilter] = useState("All");

  const filteredChallenges =
    filter === "All"
      ? data
      : data.filter((challenge) => challenge.difficulty === filter);

  const difficultyLevels = ["All", "Beginner", "Intermediate", "Advanced"];


  return (
    <div tw="max-w-7xl mx-auto p-6 font-sans">
      <Title>
        Take on exciting challenges and <br /> showcase your skills in
        groundbreaking projects!
      </Title>

      <Box>
        {difficultyLevels.map((level) => (
          <FilterButton
            key={level}
            active={filter === level}
            onClick={() => setFilter(level)}
          >
            {level} Challenges
          </FilterButton>
        ))}
      </Box>

      <div tw="grid md:grid-cols-3 gap-6">
        {filteredChallenges.map((challenge) => (
          <ChallengeCard key={challenge.id}>
            <h2 tw="text-2xl font-semibold mb-4 text-white">
              {challenge.title}
            </h2>
            <p tw="text-gray-300 mb-4">{challenge.description}</p>

            <div tw="flex justify-between mb-4 text-gray-300">
              <div tw="flex items-center space-x-2">
                <Users size={16} />
                <span>{challenge.participants} Participants</span>
              </div>
              <div tw="flex items-center space-x-2">
                <Clock size={16} />
                <span>Ends {challenge.deadline}</span>
              </div>
            </div>

            <div tw="flex justify-between items-center">
              <div tw="flex items-center space-x-2">
                <Trophy tw="text-DiSerria" size={20} />
                <span tw="font-bold text-DiSerria">Rewards</span>
              </div>
              <button tw="bg-PuertoRico text-white px-4 py-2 rounded-md hover:bg-DiSerria transition-colors">
                Join Challenge
              </button>
            </div>
          </ChallengeCard>
        ))}
      </div>
    </div>
  );
};

export default ProjectChallenge;
