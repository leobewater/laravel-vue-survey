<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use App\Models\SurveyAnswer;
use Illuminate\Http\Request;
use App\Http\Resources\SurveyResource;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();

        // total number of surveys belongs to user
        $total = Survey::query()->where('user_id', $user->id)->count();

        // latest survey
        $latest = Survey::query()->where('user_id', $user->id)->latest('created_at')->first();

        // total number of answers
        $totalAnswers = SurveyAnswer::query()
            ->join('surveys', 'survey_answers.survery_id', '=', 'surveys.id')
            ->where('surveys.user_id', $user->id)
            ->count();

        // latest 5 answer
        $latestAnswer = SurveyAnswer::query()
            ->join('surveys', 'survey_answers.survery_id', '=', 'surveys.id')
            ->where('surveys.user_id', $user->id)
            ->orderBy('end_date', 'DESC')
            ->limit(5)
            ->getModels('suvey_answers.*');

            return [
                'totalSurveys' => $total,
                'latestSurvey' => $latest ? new SurveyResource($latest) : null,
                'totalAnswers' => $totalAnswers,
            ];
            
    }
}
